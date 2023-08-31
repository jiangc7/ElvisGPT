# ElvisGPT
API for chatGPT 4.0 test version
![image](https://github.com/jiangc7/ElvisGPT/assets/118397495/820ff41d-c13f-4b24-b8ee-dba7834d41d7)

## install node

npm init

npm install express openai body-parser cors

sudo npm install express openai body-parser cors

## git clone repository

## configure the Nginx

/etc/nginx/sites-available
sudo vi fastAPI

add code:
        location /elvisgpt {
                alias /usr/share/nginx/html/ElvisGPT/;
                index index.html;
        }

restart nginx:
sudo service nginx restart

/usr/share/nginx/html/ElvisGPT

screen
node index.js

ctrl+a ctrl+d
screen -ls



