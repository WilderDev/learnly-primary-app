export default function responseContract<TData>(data: TData, ok: boolean) {
  return {
    payload: data,
    ok,
  };
}
