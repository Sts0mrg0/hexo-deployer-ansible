/**
 * Created by zyuyou on 16/2/22.
 */
var chalk = require('chalk');
var util = require('hexo-util');
var spawn = util.spawn;

module.exports = function(args){
  if(!args.host || !args.root){
    var help = '';

    help += "You should configure deployment settings in _config.yml first!\n\n"
    help += 'Example:\n';
    help += ' deploy:\n';
    help += '   type: ansible\n';
    help += 'For more help, you can check the docs: ' + chalk.underline('http://hexo.io/docs/deployment.html');

    console.log(help);
    return;
  }

  if(!args.hasOwnProperty('delete')) args.delete = true;
  if(!args.hasOwnProperty('archive')) args.archive = true;
  if(!args.hasOwnProperty('compress')) args.compress = true;
  if(!args.hasOwnProperty('verbose')) args.verbose = true;

  var params = [
    args.host,
    '-m',
    'synchronize'
  ];

  var commands = [
    'src=' + this.public_dir,
    'dest=' + args.root
  ];

  if(args.compress) commands.push('compress=yes');
  if(args.archive) commands.push('archive=yes');
  if(args.delete) commands.push('delete=yes');

  params.push('-a');
  params.push(commands.join(' '));

  if(args.verbose) params.push('-vv');
  if(args.args) params.push(args.args);

  return spawn('ansible', params, {verbose: true});
};