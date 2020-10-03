import java.util.Scanner;

public class MergeSort {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < arr.length; i++)
            arr[i] = sc.nextInt();
        int low = 0;
        int high = arr.length - 1;
        int[] res = mergeSort(arr, low, high);
        for (int i : res) {
            System.out.print(i + " ");
        }
        sc.close();
    }

    public static int[] mergeSort(int[] arr,int low,int high) {
        if(low==high){
            int[] ba = new int[1];
            ba[0] = arr[low];
            return ba;
        }

        int mid = (low+high)/2;
        int[] firstSortedArr = mergeSort(arr, low, mid);
        int[] secondSortedArr = mergeSort(arr, mid+1, high);
        int[] fullSortedArr = merge(firstSortedArr, secondSortedArr);
        return fullSortedArr;
    }

    public static int[] merge(int[] a, int[] b) {
        // System.out.println("Merging these two arrays: ");
        // System.out.println("Left array -> ");
        // print(a);
        // System.out.println("Right array -> ");
        // print(b)
        int[] res = new int[a.length + b.length];
        int i = 0;
        int j = 0;
        int k = 0;

        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                res[k] = a[i];
                i++;
                k++;
            } else {
                res[k] = b[j];
                j++;
                k++;
            }
        }
        while (i < a.length) {
            res[k] = a[i];
            i++;
            k++;
        }
        while (j < b.length) {
            res[k] = b[j];
            j++;
            k++;
        }
        return res;
    }
}
