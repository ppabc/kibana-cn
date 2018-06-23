# kibana-cn
kibana-cn是汉化kibana的文件，直接拷贝就能用。

# 说明
[[ -f /usr/bin/git ]] || { echo 'install git';yum install -y git &>/dev/null; }
git clone https://github.com/anbai-inc/Kibana_Hanization.git
cd Kibana_Hanization
python main.py /usr/share/kibana

### 重启kibana
systemctl restart kibana

用的是上面方法生成的文件，因为我不想容器还有python环境，并保证容器太大，尽量较少容器的文件，所以把汉化后的文件直接复制进容器，就OK啦！


