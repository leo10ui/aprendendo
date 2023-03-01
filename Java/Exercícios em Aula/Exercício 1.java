//Exercício 1 - Crie um programa Java que leia um array de 15
//elementos inteiros, apresentando sua soma e o array ao final.

import java.util.Arrays;
import java.util.Scanner;
public class Ex1 {

	public static void main(String[] args) {
        //Declarar um Scanner
        Scanner sc = new Scanner(System.in);
        
        //Declara um Array
        int[] array = new int[15];
        
        //Declara a variável de soma
        int soma = 0;
        
        //Faz um laço para preencher o Array
        for (int i = 0; i < array.length; i++) {
        	System.out.println("Digite um número inteiro: ");
			int aux = sc.nextInt();
			array[i] = aux;
			soma += aux;
		}
        
        //Printa o array
        System.out.println(Arrays.toString(array));
        
        //Printa a soma
        System.out.println("A soma dos inteiros é: " + soma);
        
	}

}
