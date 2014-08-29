Turi
====

By Brandon Jackson

Installation
------------

- Make sure node-webkit is installed
- Run `npm install` in the root of the repository

About
-----

The goal of this app is to provide an easy way to edit AIML files and build 
chatterbots.

A Sad Note On Debian
--------------------

WARNING: DESCRIPTION OF STUPID OPEN SOURCE POLITICS FOLLOWS!

Debian decided to go on a wild goose chase and use a non-GNU maintained version 
of libc, eglibc. Now the eglibc project is dead, and Debian lags far behind all
other modern Linux distros. It has v2.13 and node-webkit requires at least 
v2.15. It looks like the Debian team is getting their act together and updating
to v2.19 on the testing branch but who knows when the latest version will ship!
In the mean time to run node-webkit you'll need to use an old version, v0.7.5.
You can download it [here](https://www.google.com/url?q=https%3A%2F%2Fs3.amazonaws.com%2Fnode-webkit%2Fv0.7.5%2Fnode-webkit-v0.7.5-linux-ia32.tar.gz&sa=D&sntz=1&usg=AFQjCNHBXXfhYqmNKupAszd4eS-IS5gsJA)