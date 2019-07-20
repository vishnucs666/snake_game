
## Description
Snake game is a simple snake food eating game

## Dependancies

Any browser that supports JS and HTML 

### Configurations:

```
cp config/config.yml.example to config/config.yml
cp config/database.yml.example to config/database.yml
cp config/secrets.yml.example to config/secrets.yml
```

### Create a db user:

```
$ sudo -u postgres createuser tnps -d
$ sudo -u postgres psql -c "alter user tnps with password 'tnps123';"
```

### DB Setup:

```
bundle exec rake db:setup
```
    
