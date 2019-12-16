export const findByDataTestAttribute = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
}