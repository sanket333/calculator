package Sorting;

import java.util.Scanner;

public class Selection_Sort {
    
    // Bubble Sorting array elements
    public static void selection_Sort(int[] arr){
        for (int itr = 0; itr <= arr.length - 1; itr++) {
            int min = itr;
            for (int j = itr + 1; j < arr.length; j++) {
                if(is_Smaller(arr, j, min)){
                    min = j;
                }
            }
            swap(arr, itr, min);
        }
    }

    // Used to swap ith and minimum element of array
    public static void swap(int[] arr, int i, int min){
        System.out.println("Swapping "+arr[i]+" and "+arr[min]);
        int temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    // Return true if jth element is smaller than minimum element
    public static boolean is_Smaller(int[] arr, int i, int min){
        System.out.println("Comparing "+arr[i]+" and "+arr[min]);
        if(arr[i] < arr[min]){
            return true;
        } else{
            return false;
        }
    }

    // Displaying the  resultant array
    public static void display(int[] arr){
        for (int i : arr) {
            System.out.print(i+" ");
        }
    }
 
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        selection_Sort(arr);
        display(arr);

        sc.close();
    }

}
