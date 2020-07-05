relacionais
lógicos
ternário


relacional

Obs: Pra toda expressão relacional, o resultado sempre vai ser booleano TRUE ou FALSE

5 > 2 = true 
7 < 4 = false 
8 >= 8 = true 
9 <= 7 = false 
5 == 5 = true 
4 != 4 = false 


5 == 5 = true
5 == '5' = true

Operadores de identidade (mesmo valor, mesmo tipo)

5 === '5' = false
5 === 5 = true

lógicos

!       Negação = Não
%%      Conjunção = E
||      Disjunção = Ou


!true = false
!false = true

true && true = true
true && false = false
false && true = false
false && false = false

true || true = true
true || false = true
false || true = true
false || false = false

Ordem de precedencia

() ** /  ...        ARITMETICOS
> < > = ...          RELACIONAIS 
!                   LOGICOS
&& 
||

TERNARIO

teste ? true : false

(media >= 7.0) ? "Aprovado" : "Reprovado"


