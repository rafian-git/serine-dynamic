<?php


// ---------------- SiteController --------------- //
Route::get('/', 'SiteController@index')->name('index');
Route::get('/green-ville', 'SiteController@project_greenvalley')->name('greenValley');