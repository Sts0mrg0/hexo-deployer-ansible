# hexo-deployer-ansible

[![NPM version](https://badge.fury.io/js/hexo-deployer-rsync.svg)](http://badge.fury.io/js/hexo-deployer-rsync)

Ansible deployer plugin for [Hexo].

## Installation

``` bash
$ npm install hexo-deployer-ansible --save
```

## Options

You can configure this plugin in `_config.yml`.

``` yaml
deploy:
  type: ansible
  host: <host>
  user: <user>
  root: <root>
  delete: [true|false] # Default is true
  compress: [true|false] # Default is true
  archive: [true|false] # Default is false
  args: <ansible args>
  verbose: [true|false] # Default is true
```

- **host**: Address of remote host  
- **user**: Username  
- **root**: Root directory of remote host   
- **delete**: Delete old files on remote host
- **archive**: Mirrors the rsync archive flag, enables recursive, links, perms, times, owner, group flags and -D.
- **compress**: Compress file data during the transfer. In most cases, leave this enabled unless it causes problems.
- **args**: Ansible arguments
- **verbose**: Display verbose messages
- **ignore_errors**: Ignore errors

## License

MIT