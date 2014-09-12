<?php defined('SYSPATH') or die('No direct script access.');

class Controller_Home extends Controller_Template_Generic {


	public function action_index()
	{
	
		$this->template->title = 'Kohana 3.3 Example';
  		$this->template->content = View::factory('home');
		
		$this->template->scripts[] = 'assets/js/index.js';
	}
	
	public function action_language()
	{
		// requested language
		$lang = $this->request->param('id');

		// security
		if(!isset($lang) || empty($lang)) {
			$this->request->redirect('home');
		}
		
		if(!in_array($lang, Kohana::$config->load('ko32example.language'))) {
			$lang = 'en';
		}
		
		Cookie::set('lang', $lang);
		I18n::lang($lang);
		
		$this->redirect( Session::instance()->get('controller') , 302 );
	}
	
}
