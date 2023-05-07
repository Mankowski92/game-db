import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setApiKey } from '../../actions/apiKeyActions';
import { ApiKeyBar, ApiKeyForm, KeyIcon } from './apiKeyInput.styled';
import key from '../../assets/key.png';
import { validateApiKey } from '../../lib/api/validateApikey';
import { useDebounce } from '../../lib/hooks/debounce';

const ApiKeyInput = () => {
  const [apiKey, setApiKeyState] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);
  const [isUserValidated, setIsUserValidated] = useState(false);
  const dispatch = useDispatch();

  const debouncedApiKey = useDebounce(apiKey, 1000);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((event) => {
      const value = event.target.value.trim();
      setApiKeyState(value);
      setIsInputValid(value !== '');
    }, []);

  useEffect(() => {
    const validateInput = async () => {
      if (isInputValid && debouncedApiKey) {
        const isValid = await validateApiKey(debouncedApiKey);
        if (isValid) {
          dispatch(setApiKey(debouncedApiKey));
          setIsUserValidated(true);
        } else {
          dispatch(setApiKey(''));
          setIsUserValidated(false);
          if (apiKey && isUserValidated) {
            alert('Your valid api key got deprecated');
          }
        }
      }
    };
    validateInput();
  }, [apiKey, debouncedApiKey, dispatch, isInputValid, isUserValidated]);

  useEffect(() => {
    if (isUserValidated) {
      alert('Api key validation succeed');
    }
  }, [isUserValidated]);

  return (
    <ApiKeyForm>
      <ApiKeyBar
        isUserValidated={isUserValidated}
        type="text"
        placeholder="Enter api key"
        id="apiKey"
        value={apiKey}
        onChange={handleInputChange}
        required
      />
      <KeyIcon src={key} alt="key icon" />
    </ApiKeyForm>
  );
};

export default ApiKeyInput;
