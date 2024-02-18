# web-space-alpha
Đây là phần frontend của dự án Space Alpha (chuyên xử lý dữ liệu vệ tinh viễn thám).

## Frontend: dùng Reactjs + Leaflet (đều là package/library phát triển từ Javascript)
(Trong 1 ứng dụng Web thì việc sử dụng cùng lúc nhiều thư viện Javascript là rất bình thường)

## ReactJS được phát triển và build trên nền NodeJS, có vai trò và ưu điểm trong các việc:
-- xử lí điều hướng giữa các Page (dùng React Router),
-- lưu phiên đăng nhập và một số dữ liệu đăng nhập thông qua tương tác với cookie của trình duyệt; tối ưu hiệu năng hệ thống và trải nghiệm của KH
-- (bảo mật) hỗ trợ build và cắt trộn mã nguồn nên không để lộ công nghệ phát triển;

## Leaflet là thư viện chuyên dùng để xử lí dữ liệu địa lý (GeoJson), tuy nhiên nếu chỉ dùng Leaflet và JS thuần (mà không được build qua NodeJS) thì mã nguồn bị "phơi" công khai.

=> Hai bộ thư viện React và Leaflet đóng vai trò bổ sung xử lí bên cạnh nhau, không chồng chéo và cũng không thay cho nhau được.
