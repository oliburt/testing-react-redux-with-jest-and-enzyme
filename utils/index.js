import checkPropTypes from "check-prop-types";

export const findByDataTestAttribute = (component, attr) => {
    return component.find(`[data-test='${attr}']`);
}

export const checkProps = (component, expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps, 'props', component.name)
}