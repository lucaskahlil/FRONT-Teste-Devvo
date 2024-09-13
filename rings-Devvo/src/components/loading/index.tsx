import { Hourglass } from 'react-loader-spinner'

export function Loading() {
    return (
        <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={['#FFFFFF', '#595a5c']}
        />
    )
}