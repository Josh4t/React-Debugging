**Issue**: Component `ProfileCard` was re-rendering unnecessarily when the parent updated state unrelated to the card.
**Diagnosis**: Used React Developer Tools to highlight updates and noticed the component was rendering even when its props didn’t change.
**Solution**: Wrapped `ProfileCard` in `React.memo()` to prevent unnecessary renders.
