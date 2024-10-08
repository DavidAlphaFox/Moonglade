﻿let isDarkMode = false;

export function useDarkMode() {
    document.querySelector('#blog-nav').classList.remove('bg-accent1');
    document.querySelector('#blog-nav').classList.add('bg-dark');
    document.querySelector('#blog-footer').classList.add('bg-dark');
    document.querySelector('#blog-footer').classList.remove('bg-accent2');
    $('').addClass('bg-dark');

    $('body').addClass('bg-moca-dark text-light darkmode');
    $('body.body-post-slug').removeClass('bg-gray-1');
    $('.article-post-slug').removeClass('border');

    $('.card').addClass('text-white bg-dark');
    $('.list-group-item, .card-body').addClass('bg-moca-dark text-light');

    $('.post-publish-info').removeClass('text-muted').addClass('text-secondary');

    $('.post-content img.img-thumbnail').addClass('bg-dark border-secondary');
    $('.post-content table.table').addClass('table-dark');

    $('.comment-form-containter .form-control, aside .form-control').addClass('bg-transparent');
    $('aside .btn-light').removeClass('btn-light').addClass('btn-dark');
    $('#aside-tags .btn-accent').removeClass('btn-accent').addClass('btn-dark');
    $('.post-summary-tags .btn-accent').removeClass('btn-accent').addClass('btn-dark');

    $('.aside-widget').removeClass('bg-white').addClass('border-dark');
    $('.card-subtitle').removeClass('text-muted');

    $('.comment-item').removeClass('bg-white border').addClass('bg-dark border-dark');
    $('.comment-item .card-subtitle').removeClass('text-body-secondary').addClass('text-body-dark');

    isDarkMode = true;
    $('.lightswitch').addClass('bg-dark text-light border-secondary');
    document.querySelector('hr').classList.add('hr-dark');
    document.querySelector('#lighticon').classList.remove('bi-brightness-high');
    document.querySelector('#lighticon').classList.add('bi-moon');
}

export function useLightMode() {
    document.querySelector('#blog-nav').classList.add('bg-accent1');
    $('#blog-nav, #blog-footer').removeClass('bg-dark');

    document.querySelector('#blog-footer').classList.add('bg-accent2');

    $('body').removeClass('bg-moca-dark text-light darkmode');
    $('body.body-post-slug').addClass('bg-gray-1');
    $('.article-post-slug').addClass('border');

    $('.card').removeClass('text-white bg-dark');
    $('.list-group-item, .card-body').removeClass('bg-moca-dark text-light');

    $('.post-publish-info').removeClass('text-secondary').addClass('text-muted');

    $('.post-content img.img-thumbnail').removeClass('bg-dark border-secondary');
    $('.post-content table.table').removeClass('table-dark');

    $('.comment-form-containter .form-control, aside .form-control').removeClass('bg-transparent');
    $('aside .btn-light').removeClass('btn-dark').addClass('btn-light');
    $('#aside-tags .btn-dark').removeClass('btn-dark').addClass('btn-accent');
    $('.post-summary-tags .btn-dark').removeClass('btn-dark').addClass('btn-accent');

    $('.aside-widget').addClass('bg-white').removeClass('border-dark');
    $('.card-subtitle').addClass('text-muted');

    $('.comment-item').removeClass('bg-dark border-dark').addClass('bg-white border');
    $('.comment-item .card-subtitle').removeClass('text-body-dark').addClass('text-body-secondary');


    isDarkMode = false;
    $('.lightswitch').removeClass('bg-dark text-light border-secondary');
    $('hr').removeClass('hr-dark');
    document.querySelector('#lighticon').classList.add('bi-brightness-high');
    document.querySelector('#lighticon').classList.remove('bi-moon');
}

export function toggleTheme() {
    if (isDarkMode) {
        useLightMode();
    } else {
        useDarkMode();
    }
}