export const Practice2 = () => {
  // 返却値に型を指定　　　　　　＃この関数では、指定しなくてもnumberと推論はしてくれる。でも明示的に指定した方がよい。
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractice = () => {
    console.log(getTotalFee(1000));
    // calcTotalFee("1,000");
  };
  return (
    <div>
      <p>練習問題：返却値の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
