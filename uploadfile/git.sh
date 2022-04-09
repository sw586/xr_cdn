#第一次要运行的：
#git clone git@github.com:sw586/SWCF-ddns-Actions
#git config --global user.email "sw586@126.com"
#git config --global user.name "sw586"
#git init
#git remote add origin git@github.com:sw586/uploadfile.git
#ssh-keygen -t rsa -C "sw586@126.com" //一直回车
#打开：/root/.ssh/id_rsa.pub 复制到https://github.com/settings/keys ----SSH keys
#2、执行git config --global credential.helper store
git add .  &&  git commit -m "`date "+%Y-%m-%d_%H-%M-%S"`"  &&  git push -u origin +master  &&  curl "http://2ht.cn/index.php?s=api&c=run"