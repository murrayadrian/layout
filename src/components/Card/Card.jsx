import styled from "styled-components";
import {Button} from "components/Button"
import ethIcon from "assets/ethicon.svg"

const StyledCard = styled.div`
    padding: 24px;
    background: ${props => props.background || 'white'};
    border-radius: 20px;
    font-size: 12px;
    line-height: 16px;
    margin-right: 10px;
    height: ${props => props.height || 'auto'};
    width : ${props => props.width || 'auto'};

    color: #747475;
    .title {
        color: ${props => props.titleColor || '#747475'};
        text-align: left;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 12px;
      }
    
    .amount {
        font-size: 24px;
        line-height: 31px;
        color: #27262E;
    }
    .ammount-wrapper {
        margin-bottom: 12px;
    }

    .eth {
        margin-right: 4px;
    }
`

export const Card = ({title,amount,content,percent, background, width, height, titleColor}) => {
    return ( 
    <StyledCard
        background={background}
        width={width}
        height={height}
        titleColor={titleColor}>
        <div className='title'>{title}</div>
        {amount ?
            <div className="amount-wrapper">
                <img src={ethIcon} alt="" className="eth"></img><span className="amount">{amount}</span> ETH
            </div> :
            <div>
                <span>{content}</span> %
            </div>
        }
        <Button percent={percent} borderColor="#E9E9E9">{percent}%</Button>
    </StyledCard>
    )
}