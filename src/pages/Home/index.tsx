import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartcountdownButton, TaskInput } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label> Vou trabalhar em</label>
                    <TaskInput 
                    id="task" 
                    placeholder="Dê um nome para seu projeto"
                    />

                    <label htmlFor="">durante</label>
                    <MinutesAmountInput 
                    type="number" 
                    id="minutesAmount" 
                    placeholder="00" 
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartcountdownButton disabled type="submit">
                    <Play size={24}/>
                    Começar 
                </StartcountdownButton  >
            </form>
        </HomeContainer>
    )
}