import React, { useEffect } from 'react';
import { Resource, resourceActions } from '@oplog/resource-redux';
import { useSelector, useDispatch } from 'react-redux';
import { ResourceType } from '../../models';
import { StoreState } from '../../models/state';
import { AddressTypeOutputDTO } from '../../services/swagger';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export const HelloWorld: React.FC = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { label } = useParams();
	const addressType: Resource<AddressTypeOutputDTO> = useSelector(
		(state: StoreState) => state.resources[ResourceType.GetAddressType]
	);
	useEffect(() => {
		dispatch(resourceActions.resourceRequested(ResourceType.GetAddressType, { AddressLabel: 'DemoAddress' }));
	}, []);

	const onUrlParamRequest = () => {
		dispatch(resourceActions.resourceRequested(ResourceType.GetAddressType, { AddressLabel: label }));
	};

	return (
		<div>
		<span>URLParam: { label } </span>
			< span onClick = { onUrlParamRequest } > { t('AddressType') }: </>
	{ addressType }
	</div>
  );
};