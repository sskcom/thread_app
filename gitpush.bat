@git init

@git config --global user.name "sskcom"
@git config --global user.email "sskcomjp08131@gmail.com"

@git add .

@git status

@SET /P ANSWER="実行します。よろしいですか (Y/N)？"

@if /i {%ANSWER%}=={y} (goto :yes)
@if /i {%ANSWER%}=={yes} (goto :yes)

@EXIT


@:yes

@set /p star="コメントを入力してください"

@git commit -m %star%

@git branch -M main

@git remote add origin https://github.com/sskcom/thread_app.git



@git push -u origin main
@set /p star="本当にokですか"