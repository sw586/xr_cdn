<?php namespace Phpcmf\Model;

/**
 * http://www.xunruicms.com
 * 本文件是框架系统文件，二次开发时不可以修改本文件，可以通过继承类方法来重写此文件
 **/


// 模型类

class Verify extends \Phpcmf\Model
{

    // 缓存
    public function cache($site = SITE_ID) {

        $data = $this->table('admin_verify')->getAll();
        $cache = [];
        if ($data) {
            foreach ($data as $t) {
                $t['value'] = dr_string2array($t['verify']);
                unset($t['verify']);
                $cache[$t['id']] = $t;
            }
        }

        \Phpcmf\Service::L('cache')->set_file('verify', $cache);
        return;
    }
    
}