# ElvisGPT
API for chatGPT 4.0 test version

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



