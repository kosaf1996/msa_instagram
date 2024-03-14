FROM golang:1.21.6

WORKDIR /app

COPY . /app/

RUN go build -o app


EXPOSE 60000

ENTRYPOINT [ "./app" ] 