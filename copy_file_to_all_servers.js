//Copiar arquivos para todos os servidores Hackeados no USA
files = ["scriptprincipal.script"];

serverlist = ["n00dles", "zer0", "foodnstuff",
 "sigma-cosmetics", "nectar-net", "CSEC", "joesguns", "hong-fang-tea",
 "harakiri-sushi", "max-hardware", "iron-gym"];

var length = serverlist.length;

var i;
for (i = 0; i < length; i = i + 1) {
   scp(files, "home", serverlist[i]);
   connect(serverlist[i]);
   run ("scriptprincipal.script");
   connect ("home");
}
