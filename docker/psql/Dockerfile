FROM postgres:9.6.17

RUN localedef -i pt_BR -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8

ENV LANG en_US.utf8

ENV POSTGRES_USER=contacts_book
ENV POSTGRES_DB=contacts_book
ENV POSTGRES_PASSWORD=c0n74c75bo0k

EXPOSE 5432