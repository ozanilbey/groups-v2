<groups-auth
    class={'groups-element groups-root groups-' + position}
    style={'height: ' + height + '; line-height: ' + height + '; '}
>
    <groups-auth-state
        minor={true}
        callback={changeProperties}
        type={opts.type}
        theme={opts.theme}
        active={active}
        height={opts.height}
    />
    <groups-auth-login
        minor={true}
        title={opts.title}
        callback={changeProperties}
        gap={(position == 'topleft' || position == 'topright') ? height : 0}
        refresh={refreshState}
        if={active == 'login'}
    />
    <groups-auth-register
        minor={true}
        title={opts.title}
        callback={changeProperties}
        gap={(position == 'topleft' || position == 'topright') ? height : 0}
        refresh={refreshState}
        if={active == 'register'}
    />
    <groups-auth-reset
        minor={true}
        title={opts.title}
        callback={changeProperties}
        gap={(position == 'topleft' || position == 'topright') ? height : 0}
        refresh={refreshState}
        if={active == 'reset'}
    />
    <style type="less">
        /*
        @import '../styles/variables.less';
        @import '../styles/mixins.less';
        @import '../styles/options.less';
        @import '../styles/components/auth.less';
        */
    </style>
    <script>
        import './auth-state.tag';
        import './auth-login.tag';
        import './auth-register.tag';
        import './auth-reset.tag';

        this.active = opts.default || undefined;
        this.height = opts.height || '50px';
        this.position = (opts.position && ['topleft', 'topright', 'bottomleft', 'bottomright'].includes(opts.position)) ? opts.position : 'topleft';
        this.changeProperties = (event) => {
            this.active = event ? event.currentTarget.dataset.link : undefined;
            this.update();
        }
        this.refreshState = () => {
            this.tags['groups-auth-state'].stateInformation = false;
            this.tags['groups-auth-state'].update();
            this.tags['groups-auth-state'].handleState();
        }
    </script>
</groups-auth>