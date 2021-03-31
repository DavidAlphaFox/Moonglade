﻿using System;
using System.Threading.Tasks;
using Edi.Captcha;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using Moonglade.Configuration.Settings;

namespace Moonglade.Web.Middleware
{
    public class CaptchaImageMiddleware
    {
        private readonly RequestDelegate _next;
        public static CaptchaImageMiddlewareOptions Options { get; set; } = new();

        public CaptchaImageMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context, IOptions<AppSettings> settings, ISessionBasedCaptcha captcha)
        {
            if (context.Request.Path == Options.RequestPath)
            {
                var w = settings.Value.CaptchaSettings.ImageWidth;
                var h = settings.Value.CaptchaSettings.ImageHeight;

                // prevent crazy size
                if (w > 640) w = 640;
                if (h > 480) h = 480;

                var bytes = captcha.GenerateCaptchaImageBytes(context.Session, w, h);

                context.Response.StatusCode = StatusCodes.Status200OK;
                context.Response.ContentType = "image/png";
                await context.Response.Body.WriteAsync(bytes.AsMemory(0, bytes.Length), context.RequestAborted);
            }
            else
            {
                await _next(context);
            }
        }
    }

    public static class CaptchaImageMiddlewareOptionsExtensions
    {
        public static IApplicationBuilder UseCaptchaImage(this IApplicationBuilder app, Action<CaptchaImageMiddlewareOptions> options)
        {
            options(CaptchaImageMiddleware.Options);
            return app.UseMiddleware<CaptchaImageMiddleware>();
        }
    }

    public class CaptchaImageMiddlewareOptions
    {
        public PathString RequestPath { get; set; }
    }
}
