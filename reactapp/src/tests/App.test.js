import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import StonePaperScissors from '../components/Game';

describe('StonePaperScissorsGame', () => {
  it('renders_without_crashing', () => {
    render(<App />);
  });

  it('displays_the_game_title', () => {
    const { getByText } = render(<App />);
    const titleElement = getByText('Stone Paper Scissors Game');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays_player_and_computer_choices', () => {
    const { getByTestId } = render(<App />);
    const playerChoiceElement = getByTestId('player-choice');
    const computerChoiceElement = getByTestId('computer-choice');

    expect(playerChoiceElement).toBeInTheDocument();
    expect(computerChoiceElement).toBeInTheDocument();
  });

  it('displays_game_result_message', () => {
    const { getByTestId } = render(<App />);
    const resultElement = getByTestId('game-result');
    expect(resultElement).toBeInTheDocument();
  });

  it('allows_the_player_to_choose_Stone', () => {
    const { getByText, getByTestId } = render(<App />);
    const stoneButton = getByText('Stone');
    fireEvent.click(stoneButton);

    const playerChoiceElement = getByTestId('player-choice');
    expect(playerChoiceElement).toHaveTextContent('Your choice: Stone');
  });

  it('allows_the_player_to_choose_Paper', () => {
    const { getByText, getByTestId } = render(<App />);
    const paperButton = getByText('Paper');
    fireEvent.click(paperButton);

    const playerChoiceElement = getByTestId('player-choice');
    expect(playerChoiceElement).toHaveTextContent('Your choice: Paper');
  });

  it('allows_the_player_to_choose_Scissors', () => {
    const { getByText, getByTestId } = render(<App />);
    const scissorsButton = getByText('Scissors');
    fireEvent.click(scissorsButton);

    const playerChoiceElement = getByTestId('player-choice');
    expect(playerChoiceElement).toHaveTextContent('Your choice: Scissors');
  });

});
