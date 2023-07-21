import './pages/styles.scss';
import {
    pets,
    popupBurgerElement,
    burgerMenuElement,
    burgerMenuNavElement,
    petsPopupElement,
    pageElement,
    popupBurgerOpenedSelector,
    popupBurgerClosedSelector,
    popupPetsOpenedSelector,
    popupPetsClosedSelector,
    cardTitle,
    cardSubTitle,
    cardDescription,
    ageText,
    inoculationsText,
    diseasesText,
    parasitesText,
    petsPopupImage,
    sliderList,
    sliderLeftButton,
    sliderRightButton,
    IPet,
} from './utils/constans';
import { PopupBurger } from './scripts/PopupBurger';
import { PopupPets } from './scripts/PopupPets';
import { Section } from './scripts/Section';
import { Card } from './scripts/Card';
import { Slider } from './scripts/Slider';

const popupBurger = new PopupBurger(
    popupBurgerElement,
    burgerMenuElement,
    popupBurgerOpenedSelector,
    popupBurgerClosedSelector,
    pageElement,
    burgerMenuNavElement
);
popupBurger.setEventListeners();

function createCard(item: IPet) {
    const card = new Card(item, {
        selector: '.template-cards',
        handleCardClick: () => {
            const popupPets = new PopupPets(
                petsPopupElement,
                null,
                popupPetsOpenedSelector,
                popupPetsClosedSelector,
                cardTitle,
                cardSubTitle,
                cardDescription,
                ageText,
                inoculationsText,
                diseasesText,
                parasitesText,
                petsPopupImage,
                pageElement
            );
            popupPets.openPetsPopup(item);
            popupPets.setEventListeners();
        },
    });
    const cardElement = card.generateCard();
    return cardElement;
}

const sectionCards = new Section(
    {
        renderer: (item: IPet): void => {
            sectionCards.addItem(createCard(item));
        },
    },
    '.slider__cards-list'
);

sectionCards.renderCards(pets);

const slider = new Slider(sliderList, sliderLeftButton, sliderRightButton);
slider.setButtonsListeners();
