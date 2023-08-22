import Text from "components/common/text";
import { rem } from "polished";
import theme from "styles/theme";
import {
  Container,
  FieldWrapper,
  FormGroup,
  FormSection,
  SecondaryFormGroup,
  StyledForm,
} from "./styles";

import {
  CheckboxGroup,
  Input,
  InputLong,
  RadioGroup,
} from "components/sections/form-section/components";

export function GoogleFormSection() {
  return (
    <Container>
      <StyledForm>
        <FormSection>
          <Text
            mb={[rem(14), rem(14), rem(36)]}
            variant="highlight"
            color={theme.colors.black}
          >
            BASIC CONTACT
          </Text>
          <FormGroup>
            <Input id="238788490" placeholder="Name" />
            <Input id="788299260" placeholder="Secondary Decision Maker" />
            <FieldWrapper>
              <Input id="682085436" placeholder="Phone Number" />
            </FieldWrapper>
            <FieldWrapper>
              <Input id="48971740" placeholder="Email" />
            </FieldWrapper>
            <FieldWrapper>
              <Input id="288527945" placeholder="Secondary Phone Number" />
            </FieldWrapper>
            <FieldWrapper>
              <Input id="1926078686" placeholder="Secondary Email" />
            </FieldWrapper>
          </FormGroup>
          <InputLong id="465901832" placeholder="Address" />
        </FormSection>
        <FormSection>
          <Text
            mb={[rem(14), rem(14), rem(36)]}
            variant="highlight"
            color={theme.colors.black}
          >
            PROJECT SPECS
          </Text>
          <RadioGroup id="342455953" mt={rem(12)} mb={rem(48)} />
          <SecondaryFormGroup>
            <Input id="565594435" placeholder="Property Sq. Footage" />
            <Input id="1065012954" placeholder="Design Space Square Footage" />
            <Input
              id="446835355"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="Proposed Start Date"
            />
            <Input
              id="95319589"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              placeholder="Ideal Completion Date"
            />
          </SecondaryFormGroup>
        </FormSection>
        <FormSection>
          <CheckboxGroup id="959710259" mt={rem(12)} mb={rem(48)} />
        </FormSection>
        <FormSection>
          <CheckboxGroup id="1634221037" mt={rem(12)} mb={rem(48)} />
        </FormSection>
        <FormSection>
          <CheckboxGroup id="910891781" mt={rem(12)} mb={rem(48)} />
        </FormSection>
        <FormSection>
          <RadioGroup id="1807642229" mt={rem(12)} mb={rem(48)} />
        </FormSection>
        <FormSection>
          <Text
            mb={[rem(14), rem(14), rem(36)]}
            variant="highlight"
            color={theme.colors.black}
          >
            BUDGET
          </Text>
          <CheckboxGroup id="910891781" mt={rem(12)} mb={rem(48)} />
        </FormSection>
      </StyledForm>
    </Container>
  );
}
