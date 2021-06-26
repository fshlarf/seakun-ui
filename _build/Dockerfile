FROM nginx:1.18-alpine

ENV WORKDIR=/usr/app/seakun-ui

WORKDIR ${WORKDIR}

# config
COPY ./_build/supervisord/run-supervisorctl.sh ${WORKDIR}/_build/supervisord/
COPY ./_build/supervisord/run-supervisord.sh ${WORKDIR}/_build/supervisord/
COPY ./_build/supervisord/supervisord.conf ${WORKDIR}/_build/supervisord/

##install
RUN apk update && \
    apk add --no-cache git \
                       curl \
                       autoconf \
                       automake \
                       build-base \
                       zlib \
                       zlib-dev \
                       jpeg-dev \
                       libpng-dev \
                       nasm \
                       libtool \
                       yarn --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community" \
                       nodejs --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community" \
                       tzdata \
                       python3 \
                       py3-pip \
                       git \
                       vim \
    && adduser -D -H -u 1001 -s /bin/bash www-data -G www-data \
    && pip3 install git+https://github.com/Supervisor/supervisor \
    && mkdir -p /var/log/supervisor

#copy file
COPY . ${WORKDIR}

RUN mkdir -p ${WORKDIR}/node_modules

# instalation seakun-ui
RUN yarn install \
  && yarn build

# clear cache
RUN yarn cache clean

# nginx
COPY ./_build/nginx/nginx.conf /etc/nginx/
RUN rm /etc/nginx/conf.d/default.conf

CMD sh _build/supervisord/run-supervisord.sh

EXPOSE 80