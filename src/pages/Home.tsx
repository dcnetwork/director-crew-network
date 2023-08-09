import SigmaGraph from "../components/Graph";

function Home() {
    return (
        <div>
            <h1>Hollywood Director Networks</h1>
            <p>This is an exploration of how directors in Hollywood use similar crew members throughout multiple productions.</p>
            <br/>
            <SigmaGraph/>
        </div>
    );
}

export default Home;