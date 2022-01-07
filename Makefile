.Phony: up news
up: 
	npm --workspaces i gatsby-theme-buzzing@latest
news:
	npm -w news exec gatsby clean && npm -w news exec gatsby develop
ask:
	npm -w ask exec gatsby clean && npm -w ask exec gatsby develop
hn:
	npm -w hn exec gatsby clean && npm -w hn exec gatsby develop