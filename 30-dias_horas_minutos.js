//30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
//corresponde.
import prompt from 'prompt-sync'

//Entrada
const input = prompt()
const minutos = Number(input('Minutos:'))

//Processamento
const minuto_s = minutos % 60
const horas = ((minutos- minuto_s)/60) % 24
const dias = (minutos - minuto_s-(horas*60))

//Saída
console.log('Equivale a',minuto_s,'minuto(s)', horas,'hora(s) e', dias,'dia(s)')