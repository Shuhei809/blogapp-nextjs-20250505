type Params = {
    params: Promise<{
        id: string
    }>
}

export default async function page({ params }) {
    // console.log(params)
    const { id } = await params
  return (
      <div>
          ブログID: {id}
      </div>
  )
}
