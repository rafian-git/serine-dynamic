<?php


// ---------------- SiteController --------------- //
Route::get('/', 'SiteController@index')->name('index');
Route::get('/green-valley', 'SiteController@project_greenvalley')->name('greenValley');