//Exercício 2 - Crie um programa Java que some dois arrays de 10
//elementos reais dados pelo usuário.

import java.util.Arrays;
import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		//Declara Arrays 1 e 2
		double[] array1 = new double[10];
		double[] array2 = new double[10];
		
		//Declara Array para a Soma
		double[] array_soma = new double[10];
		
		//Declara Scanner
		Scanner sc = new Scanner(System.in);
		
		le_array(array1, sc, 1);
		le_array(array2, sc, 2);
		

		
		//Faz a soma dos Arrays
		for (int i = 0; i < array1.length; i++) {
			array_soma[i] = array1[i] + array2[i];
		}
		
		//Printa o array 1 e 2, e a soma dos dois arrays
		System.out.println("Array 1: " + Arrays.toString(array1));
		System.out.println("Array 2: " + Arrays.toString(array2));
		System.out.println("Soma dos Arrays: " + Arrays.toString(array_soma));
	}

	private static void le_array(double[] array, Scanner sc, int n) {
		//Pega os valores digitados pelo usuário, array 1
		for (int i = 0; i < array.length; i++) {
			System.out.println("Digite o valor " + (i + 1) + " do array "+n+": ");
			int aux = sc.nextInt();
			array[i] = aux;
		}
	}

}
