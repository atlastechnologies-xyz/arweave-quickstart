Get started with arweave by installing the packaged build: https://github.com/ArweaveTeam/arweave/releases/tag/N.2.3.0.0

It's kind of complicated and you'll have to make a lot of modifications to your filesystem limits. 

You can also run in polling mode to get around that by running 
```
./bin/start polling mining_addr P3f5HSU7aJAUcw0_S1SKpWVr25dF16vy8GyOlGK0q6k peer 188.166.200.45 peer 188.166.192.169 peer 163.47.11.64 peer 159.203.158.108 peer 139.59.51.59 peer 138.197.232.192
```

Just swap the word polling for mine to earn tokens:
```
./bin/start mine mining_addr P3f5HSU7aJAUcw0_S1SKpWVr25dF16vy8GyOlGK0q6k peer 188.166.200.45 peer 188.166.192.169 peer 163.47.11.64 peer 159.203.158.108 peer 139.59.51.59 peer 138.197.232.192
```
