build:
	aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 034992998866.dkr.ecr.us-east-1.amazonaws.com
	docker build -t mnk-telegram-bot .
	docker tag mnk-telegram-bot:latest 034992998866.dkr.ecr.us-east-1.amazonaws.com/mnk-telegram-bot:latest
	docker push 034992998866.dkr.ecr.us-east-1.amazonaws.com/mnk-telegram-bot:latest
