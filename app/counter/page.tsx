import Counter from "../../components/Counter";
export default function CounterPage(){
    return(
        <main style={{ padding: "2rem" }}>
            <h1>Counter Demo</h1>
            <Counter incrementAmount={1} buttonColor="blue" />
            <Counter incrementAmount={2} buttonColor="green" />
        </main>
    )
}