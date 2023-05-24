import styled from "styled-components"
import { Layout } from "components/Layout"
import {Card} from "components/Card"

const AppWrapper = styled.div`
    text-align: center;
    .App-header {
        background-color: #CAEAE6;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    }
    .button-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 16px;
        font-weight: 700;
        font-size: 13px;
        color: #27262e;
    }
    .card-wrapper {
        width: 350px;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

`
export const Home = () => {
    return (
       <Layout>
        <AppWrapper>
            <header className="App-header">
                <div className="card-wrapper">
                    <Card title={"Revenue"} amount="5.00" percent={12.3}></Card>
                    <Card title={"Spending"} amount="2.00" percent={12.3}></Card>
                    <Card title={"ROI"} amount="14.02" percent={-5.1}></Card>
                    <Card title={"Estimated"} amount="7.00" percent={3.2}></Card>
                </div>
            </header>
        </AppWrapper>
       </Layout>
    )
}