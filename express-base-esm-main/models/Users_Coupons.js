import { DataTypes } from 'sequelize'
export default async function (sequelize) {
  return sequelize.define(
    'Users_Coupons',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // 假設您有一個 users 表
          key: 'id',
        },
      },
      coupon_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'coupons', // 這裡引用我們之前定義的 coupons 表
          key: 'id',
        },
      },
      assigned_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      redeemed_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM('unused', 'used', 'expired'),
        allowNull: false,
        defaultValue: 'unused',
      },
    },
    {
      tableName: 'users_coupons', //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: 'created_at', // 建立的時間戳
      updatedAt: 'updated_at', // 更新的時間戳
    }
  )
}
