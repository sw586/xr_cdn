<?php namespace Phpcmf\Controllers\Admin;

/**
 * http://www.xunruicms.com
 * 本文件是框架系统文件，二次开发时不可以修改本文件
 **/

class Error_php extends \Phpcmf\Common
{
	public function index() {
	    dr_redirect(dr_url('error/index'));exit;
	}
}