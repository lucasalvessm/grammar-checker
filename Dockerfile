FROM ubuntu:latest

# environment dependencies
RUN apt-get update


# python setup 
RUN apt install -y python3 \ 
    && apt install -y python3-pip



# whisper dependencies
RUN apt install -y ffmpeg \
    && pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu117 \
    && pip3 install -U openai-whisper \
    && pip3 install setuptools-rust

# node setup 

RUN apt install  -y curl

# set bash as default shell
SHELL ["/bin/bash", "--login", "-i", "-c"]
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash \
    && source /root/.bashrc \
    && nvm install 20.7.0 \
    && nvm use 20.7.0 


WORKDIR /app

COPY . /app
RUN cd /app && npm install

EXPOSE 3000
# run node app
CMD  npx nx run backend:serve