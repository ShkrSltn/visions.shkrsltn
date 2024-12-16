import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

export function initializeIcons(library: FaIconLibrary): void {
    library.addIconPacks(fas, far, fab);
    // Если нужны отдельные иконки, можно добавить их здесь
    // library.addIcons(faSpecificIcon1, faSpecificIcon2);
}