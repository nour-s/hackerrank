// I couldn't make sense of this solution, but it works

public static int activityNotifications(int[] expenditure, int d)
{
    int notifications = 0;
    var arr = new int[d];
    Array.Copy(expenditure, arr, d);
    Array.Sort(arr);
    for (int i = d; i < expenditure.Length; i++)
    {
        if (expenditure[i] >= arr[d / 2] + arr[(d - 1) / 2])
        {
            notifications++;
        }
        int index = Array.BinarySearch(arr, expenditure[i - d]);
        Array.Copy(arr, index + 1, arr, index, d - index - 1);
        index = Array.BinarySearch(arr, 0, d - 1, expenditure[i]);
        index = index >= 0 ? index : ~index;
        Array.Copy(arr, index, arr, index + 1, d - index - 1);
        arr[index] = expenditure[i];
    }
    return notifications;
}

activityNotifications(new int[] { 2, 3, 4, 2, 3, 6, 8, 4, 5 }, 2);