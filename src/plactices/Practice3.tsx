export const Practice3 = () => {
  // 返却値に型を指定　　　　　　＃この関数では、指定しなくてもnumberと推論はしてくれる。でも明示的に指定した方がよい。
  const getTotalFee = (num: number): number => {
    const total = num * 1.1;
    return total.toString();
  };
  const onClickPractice = () => {
    let total: number = 0;
    total = getTotalFee(1000);
    console.log(total);
  };
  return (
    <div>
      <p>練習問題：変数の型指定</p>
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  );
};
