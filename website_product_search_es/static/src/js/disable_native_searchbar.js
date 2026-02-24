/** @odoo-module **/

import { SearchBar } from "@website/snippets/s_searchbar/search_bar";

const originalSetup = SearchBar.prototype.setup;

SearchBar.prototype.setup = function () {
    originalSetup.apply(this, arguments);

    const rawLimit = this.inputEl?.dataset?.limit;
    const parsedLimit = parseInt(rawLimit, 10);
    if (!Number.isNaN(parsedLimit)) {
        // In Odoo 19 core, setup uses `parseInt(...) || 5`, which forces 0 to 5.
        // Respect explicit `data-limit="0"` so native autocomplete can be disabled.
        this.limit = parsedLimit;
    }
};
